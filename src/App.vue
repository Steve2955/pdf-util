<template>
	<div id="app" @drop.prevent="dropFiles" @dragover.prevent>
		<section class="hero is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						pdf-util
					</h1>
					<h2 class="subtitle">
						Merge PDFs directly in your browser without sending them to some server
					</h2>
				</div>
			</div>
		</section>
		<div class="container px-3">
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
	</div>
</template>

<script>
import fileDialog from 'file-dialog';
import { PDFDocument } from 'pdf-lib';
import download from 'downloadjs';

export default {
	name: 'App',
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

			for(let i = 0; i < this.files.length; i++){
				const appendPDF = await PDFDocument.load(this.files[i].data);
				const appendPages = await mergePDF.copyPages(appendPDF, appendPDF.getPageIndices());
				for(let i = 0; i < appendPages.length; i++){
					await mergePDF.addPage(appendPages[i]);
				}
			}

			const mergePDFFile = await mergePDF.save();
			download(mergePDFFile, "merged.pdf", "application/pdf");
			this.isLoading = false;
		},
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
