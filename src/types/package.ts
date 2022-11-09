export type ListPackage = Pick<
    Package,
    | "package_id"
    | "salesorder_id"
    | "shipment_id"
    | "customer_id"
    | "customer_name"
    | "status"
    | "package_number"
    | "tracking_number"
    | "is_tracking_enabled"
    | "shipment_type"
    | "date"
    | "quantity"
    | "salesorder_number"
    | "created_time"
    | "delivery_method"
    | "last_modified_time"
    | "shipment_date"
    | "is_carrier_shipment"
>;

export type PackageLineItem = {
    line_item_id: string;
    so_line_item_id: string;
    item_id: string;
    picklist_item_id: string;
    picklist_number: string;
    sku: string;
    name: string;
    description: string;
    item_order: number;
    quantity: number;
    unit: string;
    image_name: string;
    image_type: string;
    image_document_id: string;
    is_invoiced: true;
    item_custom_fields: [];
    batches: [];
    track_batch_for_package: false;
    warehouse_id: string;
    warehouse_name: string;
};

/**
 * The ShipmentOrder can be included in a already shipped package
 * This types defines the values, that the Zoho API returns us
 */
export type ShipmentOrder = {
    date: string;
    shipment_id: string;
    aftership_carrier_code: "dhl" | "dpd" | "ups" | "hermes";
    shipment_number: string;
    shipment_date: string;
    shipment_date_with_time: string;
    tracking_number: string;
    /**
     * When you use live tracking, you can't set the trcking link by yourself
     */
    tracking_link: string;
    delivery_date: string;
    delivery_date_with_time: string;
    delivery_method: string;
    shipment_type: string;
    associated_packages_count: number;
    carrier: string;
    service: string;
    delivery_days: string;
    delivery_guarantee: false;
    tracking_url: string;
    is_carrier_shipment: boolean;
    notes: string;
};

/**
 * These are the packages created for Sales Orders
 */
export type Package = {
    /**
     * Unique ID generated by the server for the package. This is used as an identifier.
     */
    package_id: string;

    /**
     * Package number.
     */
    package_number: string;

    customer_id: string;

    customer_name: string;

    /**
     * Sometime Zoho gives us the quantity in string, sometimes as number..
     */
    quantity: string | number;

    created_time: string;

    is_carrier_shipment: boolean;

    shipment_type: string;

    /**
     * The current status of the Package.
     */
    status: "not_shipped" | "shipped" | "delivered";

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
     * In most cases the same as carrier
     */
    delivery_method: string;

    line_items: PackageLineItem[];

    /**
     * Name of the service provided by the carrier.
     */
    service: string;

    /**
     * Tracking number of shipment.
     */
    tracking_number: string;

    is_tracking_enabled: boolean;

    /**
     * Date, that the package got created
     */
    date: string;

    /**
     * Shipment date of the Sales Order.
     * ISO 8601 format - YYYY-MM-DDThh:mm:ssTZD
     */
    shipment_date: string;

    shipment_order?: ShipmentOrder;

    /**
     * The expected days to be taken for the delivery.
     */
    delivery_days: string;

    /**
     * Delivery guarantee of the shipment can be true or false.
     */
    delivery_guarantee: boolean;

    last_modified_time: string;

    salesorder_id: string;

    salesorder_number: string;

    notes: string;
};

export type PackageShortList = Pick<
    Package,
    | "package_id"
    | "package_number"
    | "date"
    | "status"
    | "detailed_status"
    | "status_message"
    | "shipment_id"
    | "shipment_number"
    | "shipment_status"
    | "carrier"
    | "service"
    | "tracking_number"
    | "shipment_date"
    | "delivery_days"
    | "delivery_guarantee"
    | "delivery_method"
    | "quantity"
    | "is_tracking_enabled"
    | "shipment_order"
>;

export type CreatePackageLineItems = Pick<
    PackageLineItem,
    "so_line_item_id" | "quantity"
>[];
export type CreatePackage = Pick<Package, "date"> &
    Partial<Pick<Package, "package_number" | "notes">> & {
        line_items: CreatePackageLineItems;
    };

export type CreatePackageRes = Package;

export type CreateShipment = Pick<
    ShipmentOrder,
    "date" | "delivery_method" | "tracking_number"
> &
    Partial<
        Pick<
            ShipmentOrder,
            "tracking_link" | "notes" | "aftership_carrier_code"
        >
    >;

export type CreateShipmentRes = ShipmentOrder;
