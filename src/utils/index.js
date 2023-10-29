// A small utility to update the color of the status badge based on the status of the product.
export function getStatusColor(status) {
    switch (status) {
        case "Approved":
            return "green";
        case "Missing":
            return "orange";
        case "Missing-Urgent":
            return "red";
        default:
            return "transparent";
    }
}
