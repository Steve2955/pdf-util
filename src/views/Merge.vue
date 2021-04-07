<template>
	<div @drop.prevent="dropFiles" @dragover.prevent>
			<div class="box mt-4">
				<div v-if="!files.length">
					<img class="mt-5 mb-2" src="@/assets/icons/pdf-box.svg" height="100px" width="100px">
					<p class="mb-5">Drop PDFs here or click below</p>
				</div>
				<div v-else>
					<p class="my-2" v-for="(file, index) in files" :key="index">{{file.name}}</p>
				</div>
				<b-button size="is-medium" type="is-primary" @click="addFile" rounded expanded>Add PDFs</b-button>
			</div>
			<b-button size="is-medium" type="is-primary" @click="mergePDF" rounded expanded outlined :loading="isLoading" :disabled="files.length==0">Merge PDFs</b-button>
		</div>
</template>

<script>
import fileDialog from 'file-dialog';
import { PDFDocument } from 'pdf-lib';
import download from 'downloadjs';

export default {
name: 'Merge',
data(){
return {
	files: [],
	isLoading: false,
};
},
methods: {
addFile: function(){
	fileDialog({ multiple: true, accept: '.pdf' }).then(files => files.forEach(file => this.readFile(file)));
},
dropFiles: function(e) {
	let files = e.dataTransfer.files;
	files.forEach(file => this.readFile(file));
},
readFile: function(file){
	const reader = new FileReader();
	reader.onload = () => {
		this.files.push({
			name: file.name,
			lastModified: file.lastModified,
			size: file.size,
			data: reader.result,
		});
	};
	reader.onerror = err => console.log(err);
	reader.readAsArrayBuffer(file);
},
mergePDF: async function(){
	this.isLoading = true;
	const mergePDF = await PDFDocument.create();

    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

    for await (const file of this.files)
    {
        const appendPDF = await PDFDocument.load(file.data);
        const appendPages = await mergePDF.copyPages(appendPDF, appendPDF.getPageIndices());

        appendPages.forEach(appendPage => mergePDF.addPage(appendPage));
    }

	const mergePDFFile = await mergePDF.save();
	download(mergePDFFile, "merged.pdf", "application/pdf");
	this.isLoading = false;
},
mosaicPDF: async function(){
	let xC = 2;
	let yC = 5;

	const mosaicPDF = await PDFDocument.create();
	const embedPdf = await PDFDocument.load(this.files[0].data);
	const embedPages = await mosaicPDF.embedPdf(embedPdf, embedPdf.getPageIndices());

	for(let i = 0; i < embedPages.length; i += xC + yC){
		const page = mosaicPDF.addPage();
		for(let x = 0; x < xC; x++){
			for(let y = 0; y < yC; y++){
				if(x + xC * y > embedPages.length) break;
				page.drawPage(embedPages[x + xC * y], {
					x: x * (page.getWidth()/xC),
					y: page.getHeight()*((yC-1)/yC) - (page.getHeight() / yC * y),
					width: page.getWidth()/xC,
					height: page.getHeight()/yC,
				});
			}
		}
	}
	const mergePDFFile = await mosaicPDF.save();
	download(mergePDFFile, "merged.pdf", "application/pdf");
}
}
}
</script>
