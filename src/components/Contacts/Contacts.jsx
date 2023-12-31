import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import Filter from "../Filter/Filter";
import ContactsItem from "../ContactsItem/ContactsItem";
import Notification from "../Notification/Notification";
import scss from "./Contacts.module.scss";

const Contacts = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h2 className={scss.title}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ul className={scss.contacts}>
            <ContactsItem />
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Contacts;
