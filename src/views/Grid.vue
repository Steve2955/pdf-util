<template>
	<div class="mb-5" @drop.prevent="dropFiles" @dragover.prevent>
			<div class="box mt-4">
				<img class="mt-5 mb-2" src="@/assets/icons/pdf-box.svg" height="100px" width="100px">
				<div v-if="!file">
					<p class="mb-5">Drop PDF here or click below</p>
				</div>
				<div v-else>
					<p class="mb-5">{{file.name}}</p>
				</div>
				<b-button size="is-medium" type="is-primary" @click="addFile" rounded expanded>Add PDF</b-button>
			</div>
			<div class="box">
				<h3 class="is-size-5 mb-3">Grid options</h3>
				<div class="field is-horizontal">
					<div class="field-label is-normal">
						<label class="label">Horizontal Pages</label>
					</div>
					<div class="field-body">
						<div class="field">
							<p class="control">
								<input class="input is-rounded"  min="1" max="10" v-model.number="xC" type="number" placeholder="X">
							</p>
						</div>
					</div>
				</div>
				<div class="field is-horizontal">
					<div class="field-label is-normal">
						<label class="label">Vertical Pages</label>
					</div>
					<div class="field-body">
						<div class="field">
							<p class="control">
								<input class="input is-rounded" min="1" max="10" v-model.number="yC" type="number" placeholder="Y">
							</p>
						</div>
					</div>
				</div>
			</div>
			<b-button size="is-medium" type="is-primary" @click="gridPDF" rounded expanded outlined :loading="isLoading" :disabled="!file">Create Grid PDF</b-button>
		</div>
</template>

<script>
import fileDialog from 'file-dialog';
import { PDFDocument } from 'pdf-lib';
import download from 'downloadjs';

export default {
	name: 'Grid',
	data(){
	return {
		file: undefined,
		isLoading: false,
		xC: 2,
		yC: 2,
	};
	},
	methods: {
		addFile: function(){
			fileDialog({ accept: '.pdf' }).then(([file]) => this.readFile(file));
		},
		dropFiles: function(e) {
			let [file] = e.dataTransfer.files;
			this.readFile(file);
		},
		readFile: function(file){
			const reader = new FileReader();
			reader.onload = () => {
				this.file = {
					name: file.name,
					lastModified: file.lastModified,
					size: file.size,
					data: reader.result,
				};
			};
			reader.onerror = err => console.log(err);
			reader.readAsArrayBuffer(file);
		},
		gridPDF: async function(){
			this.isLoading = true;
			const {xC, yC} = this;


			const gridPDF = await PDFDocument.create();
			const embedPdf = await PDFDocument.load(this.file.data);
			const embedPages = await gridPDF.embedPdf(embedPdf, embedPdf.getPageIndices());

			for(let i = 0; i < embedPages.length; i += xC + yC){
				const page = gridPDF.addPage();
				for(let x = 0; x < xC; x++)
                {
					for(let y = 0; y < yC; y++)
                    {
						if(i + x + xC * y >= embedPages.length - 1) break;

						page.drawPage(embedPages[i + x + xC * y], {
							x: x * (page.getWidth()/xC),
							y: page.getHeight()*((yC-1)/yC) - (page.getHeight() / yC * y),
							width: page.getWidth()/xC,
							height: page.getHeight()/yC,
						});
					}
				}
			}
			const mergePDFFile = await gridPDF.save();
			download(mergePDFFile, "grid.pdf", "application/pdf");
			this.isLoading = false;
		}
	}
}
</script>
