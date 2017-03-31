export interface IUser {
  userProfileId: number;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdOn: Date;
  createdBy: string;
  notes: string;
  expanded:boolean;
}
