import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})

export class Componente01Component{
  listNames: string[] = ['Fernando', 'Linton']
  name!: string;
  image:string = `./assets/2.jpeg`
  showImage: boolean = true;


  async getImage(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET',})
    const data = await response.json();

    return data
  }

  teste(){
    alert("testando")
  }
  async changeImg(){
    const image = await this.getImage();
    this.image = image.message
  }
  onClickBtn(){
    if (this.name == this.listNames[1]){
      this.name = this.listNames[0]
    }
    else{
      this.name = this.listNames[1]
    }
  }
}
