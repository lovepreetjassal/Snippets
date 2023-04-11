import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-externalhtml',
    templateUrl: './externalhtml.component.html',
    styleUrls: ['./externalhtml.component.css']
})
export class ExternalhtmlComponent implements OnInit {

    externalHtml: any;

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.http.get('assets/pathtofile.html', { responseType: 'text' }).subscribe(
            data => this.externalHtml = this.sanitizer.bypassSecurityTrustHtml(data)
        );
        this.loadJsCssFile("assets/pathtofile.js", 'script');
    }

    loadJsCssFile(url: any, type: string) {
        let node: any;
        if (type === 'script') {
            node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
        } else {
            node = document.createElement('link');
            node.href = url;
            node.rel = 'stylesheet';
        }
        document.getElementsByTagName('head')[0].appendChild(node);
    }

}
