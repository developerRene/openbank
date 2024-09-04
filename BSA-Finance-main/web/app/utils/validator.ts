export class Validator {
    private static validEntity: string[] = ["personal", "business"];
    private static validService: string[] = ["loans", "financings", "credit-cards", "invoice-financings"];

    // validates the entity and service combination
    // checks if they are not empty, if each of them is among validEntity and validService, and
    // if personal and invoice-financing are not together
    public static validate(entity:string, service:string): boolean {
        return (
            entity !== "" &&
            service !== "" &&
            this.validEntity.includes(entity) &&
            this.validService.includes(service) &&
            !(entity === "personal" && service === "invoice-financings")
        );
    }
}