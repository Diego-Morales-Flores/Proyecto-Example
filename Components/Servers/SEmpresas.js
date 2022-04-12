import { createServer } from "miragejs"

let item=[{ 
nombre: "Hotel Gloria La Paz",
direccion: "Calle Potosi",  
telefono:"68212973",
foto:require("../../assets/81/Gloria.png"),
latitud:-16.495533917693507,
longitud: -68.1359167226627, 
descripcion:"Localizado a unos pasos de las atracciones culturales e históricas más ricas del corazón de la ciudad (la iglesia de San Francisco, el Mercado de las Brujas, la Plaza Murillo, la calle Jaén…), Hotel Gloria ofrece un punto estratégico y acogedor desde el cual abrazar, en toda comodidad, la aventura paceña." },
{ nombre: "La cheve 21",
direccion: "Zona San Miguel, Calle Cordero #8157 591",
telefono:"77219924",
foto:require("../../assets/81/Cheve.png"),
latitud:-16.544889354636766, 
longitud:-68.07742654043749,
descripcion:"Somos un restaurante bar con un concepto 100% atractivo para todos, te ofrecemos gran variedad de alimentos, bebidas y cervezas a un mismo precio sin escatimar calidad en ambientes espaciosos acompañado de buena música y excelente atencion" },
{ nombre: "EQUINOCCIO",
direccion: "av. Sánchez Lima #2191 2",
telefono:"77275761",
foto:require("../../assets/81/EQUINOCCIO.png"),
latitud:-16.508565226732284, 
longitud:-68.12970534438658,
descripcion:"Rumbo a los 30 años! Fundado el 03 de Diciembre de 1992" },
{ nombre: "Jose Jose Martin Fierro",
direccion: "La Paz",
telefono:"77712863",
foto:require("../../assets/icons/perfil.png"),
latitud:-16.48877054534671,
longitud: -68.11172093454279,
descripcion:"Lic. en Turismo, Guia especializado en lugares iconicos de la majestuosa Ciudad de La Paz." },
{ nombre:"Viaexperience",
direccion: "CALLE 14 CALACOTO. Pasaje 400 No 4",
telefono:"78945028",
foto:require("../../assets/81/Viaexperience.png"),
latitud:-16.545281067395234,
longitud: -68.08381681550202,
descripcion:"Nos encargamos de construir tus vacaciones perfectas.Entregamos experiencias inolvidables en nuestros paquetes grupales y itinerarios personalizados; siempre garantizando los precios mas competitivos del mercado.Conoce nuestros exclusivos destinos." },]

createServer({
  routes() {
    this.namespace = "api"
    this.get("/empresas", () => {
      return {
        item
      }
    })
    this.get(
        "/login",
        () => {
          return {
              mensaje:'aceptado'
          }
        }
      )
      this.post("/register", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        item.push(attrs)
        return { item: attrs }
      })
  
    }
    
  ,
})