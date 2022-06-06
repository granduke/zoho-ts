/**
 * These are the packages created for Sales Orders
 */
export type Package = {
    /**
     * Unique ID generated by the server for the package. This is used as an identifier.
     */
    package_id: string;

    /**
     * Package number of the Sales Order.
     */
    package_number: string;

    /**
     * The current status of the Sales Order.
     */
    status: string;

    /**
     * Detailed status.
     */
    detailed_status: string;

    /**
     * Status message of package.
     */
    status_message: string;

    /**
     * Unique ID generated by the server for the shipment. This is used as an identifier.
     */
    shipment_id: string;

    /**
     * Shipment number of the package.
     */
    shipment_number: string;

    /**
     * Shipment status of the package.
     */
    shipment_status: string;

    /**
     * Name of the shipping carrier.
     */
    carrier: string;

    /**
     * Name of the service provided by the carrier.
     */
    service: string;

    /**
     * Tracking number of shipment.
     */
    tracking_number: string;

    /**
     * Date, that the package got created
     */
    date: string;

    /**
     * Shipment date of the Sales Order.
     * ISO 8601 format - YYYY-MM-DDThh:mm:ssTZD
     */
    shipment_date: string;

    /**
     * The expected days to be taken for the delivery.
     */
    delivery_days: string;

    /**
     * Delivery guarantee of the shipment can be true or false.
     */
    delivery_guarantee: boolean;
};
