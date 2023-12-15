import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

// app header component for all pages
export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-3 py-4 bg-[#e6efff]">
      <h3 className="text-2xl font-medium text-[#A13131]">Papper Spray</h3>
      <button className="">
        <FontAwesomeIcon className="text-2xl" icon={faBell} />
      </button>
    </header>
  );
}
