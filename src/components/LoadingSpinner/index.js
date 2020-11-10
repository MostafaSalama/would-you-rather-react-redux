import React from 'react';
import styles from './LoadingSpineer.module.css';
import audioLoader from './audio.svg';
function LoadingSpinner() {
	return (
		<div className={styles.container}>
			<div>
				<img src={audioLoader} alt={'audio loader animated'} />
			</div>
		</div>
	);
}
export default LoadingSpinner;
