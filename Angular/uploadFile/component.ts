async fileChanged(e: any) {
    let file = e.target.files[0];
    let result: string = await this.readFile(this.file) as string;
    let rows = result.split(/\r?\n|\r|\n/g);

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let columns = row.split(",");
        console.log(columns);
    }
}

readFile(file: any) {
    return new Promise((resolve, reject) => {
        var fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result)
        };
        fr.onerror = reject;
        fr.readAsText(file);
    });
}