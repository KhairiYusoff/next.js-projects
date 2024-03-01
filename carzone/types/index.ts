export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
