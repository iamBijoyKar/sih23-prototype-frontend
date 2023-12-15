import PropTypes from 'prop-types';

NavBadge.propTypes = {
  children: PropTypes.node,
  badgeCount: PropTypes.number,
};

// !this component must be wraped the icon component from fontawesome
// !unless the UI will be broken because of the absolute position of the badge

export default function NavBadge({ children, badgeCount }) {
  if (badgeCount === undefined || badgeCount === 0) return <>{children}</>;
  return (
    <div className="relative">
      {children}
      {badgeCount > 1 ? (
        <span className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
          {badgeCount}
        </span>
      ) : (
        <span className="absolute -top-[7px] -right-[7px] flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-red-500 rounded-full"></span>
      )}
    </div>
  );
}
