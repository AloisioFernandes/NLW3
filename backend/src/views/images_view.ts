import Image from '../models/Image'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.1.106:3333/uploads/${image.path}` //em ambiente de produção, trocar url por variável ambiente
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}