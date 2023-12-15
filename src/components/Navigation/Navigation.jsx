import {
  faHouse,
  faLocationDot,
  faPlus,
  faEnvelope,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import Navlink from './Navlink';

// app navigation component for all pages
export default function Navigation() {
  return (
    <nav className="w-full px-4 py-4 pb-2">
      <ul className="flex items-baseline justify-between">
        <li className="">
          <Navlink icon={faHouse} label="Home" url="/" />
        </li>
        <li className="">
          <Navlink icon={faLocationDot} label="Detection" url="/detection" />
        </li>
        <li className="">
          <Navlink icon={faPlus} label="New" url="/new" size="3xl" />
        </li>
        <li className="">
          <Navlink icon={faEnvelope} label="Community" url="/community" />
        </li>
        <li className="">
          <Navlink icon={faCircleUser} label="Profile" url="/profile" />
        </li>
      </ul>
    </nav>
  );
}
