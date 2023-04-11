download(url: string): void {
    this.downloads.download(url).subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = this.content.fileName;
        a.click();
        URL.revokeObjectURL(objectUrl);
    },
        error => {
            console.log(`Error downloading ${url}`);
            console.log(error);
        });
}
