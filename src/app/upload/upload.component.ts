import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public previsualizacionImage:String;
  public archivos:any = []

  constructor( private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }

  capturarFile(event: any){

    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then ((imagen: any) => {
      this.previsualizacionImage = imagen.base;
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
    //console.log(event.target.files);

  }


  extraerBase64 = async ($event:any) => new Promise ((resolve, reject) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve ({
          Blob: $event,
          image,
          base: reader.result
        });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
      };
    } catch (e){
      return ;
    }
  })


  
}
