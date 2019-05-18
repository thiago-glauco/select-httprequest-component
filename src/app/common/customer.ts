export class Customer {
    firstName: String;
    lastName: String;
    email: String;
    streetAddress1: String;
    streetAddress2: String;
    city: String;
    state: String;
    zip: String;
    addressType: String = "home";
    sendCatalog: Boolean = false;
}