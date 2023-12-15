import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loader from '../components/Loader';

// * prop types for suspense provider
SuspenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// * suspense provider for lazy loading
export function SuspenseProvider({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
