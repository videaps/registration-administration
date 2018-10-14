import { SafeResourceUrl } from '@angular/platform-browser';

export interface RegistrationModel {
    firstName: string;
    surName: string;
    email: string;
    street: string;
    houseNo: string;
    postCode: string;
    city: string;
    preDial: string;
    phoneNumber: string;
    drivingLicense: string; // base64 string
    drivingLicensePath: SafeResourceUrl; // local image resource path
    tariff: string;
    discount: string;
    reference: string;
    termsAndConditionsAccepted: boolean;
    privacyPolicyAccepted: boolean;
    priceListAccepted: boolean;
}