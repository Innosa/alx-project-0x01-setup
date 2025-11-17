export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    geo: {
      lat: string;
      lng: string;
    };
  };

  phone: string;
  website: string;

  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


// Full user data structure
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Props for the modal component
export interface UserModalProps {
  isOpen: boolean;          
  onClose: () => void;     
  onAddUser: (user: UserData) => void;
}

