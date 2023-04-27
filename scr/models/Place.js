class Place{
    constructor(id, title, image, adress, lat, lng){
        this.id = id.toString();
        this.title = title;
        this.image = image;
        this.address = adress;
        this.lat = lat;
        this.lng = lng;
    }
}

export default Place;