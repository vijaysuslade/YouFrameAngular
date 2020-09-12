import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  retrieveResonse: any;
  base64Data: any;
  retrievedImage: any;
  constructor(private httpClient:HttpClient) { }

  saveImage(uploadImageData):Observable<any>{
    return this.httpClient.post("http://localhost:8080/saveImage",uploadImageData);
  }

  getImageUrls():Observable<any>{
    return this.httpClient.get("http://localhost:8080/getAllImages");
  }
  getImage(imageUrl):Observable<Blob>{
 return 
this.httpClient.get(imageUrl).subscribe(res => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }
  );
  }
}
