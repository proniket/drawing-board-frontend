import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tooltip';

import styles from './index.module.css'

import { menuItemClick, actionItemClick } from '@/slice/menuSlice'

import { MENU_ITEMS } from '@/constants'
const Menu = () => {
    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))
    }

    const handleActioItemClick = (itemName) => {
        dispatch(actionItemClick(itemName))
    }
    return (
		<div className={styles.menuContainer}>
			<div
				data-tooltip-id='pencil-tooltip'
				// data-tooltip-content='pencil'
				className={cx(styles.iconWrapper, {
					[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
				})}
				onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
				<FontAwesomeIcon icon={faPencil} className={styles.icon} />
				<Tooltip id='pencil-tooltip' content='pencil' />
			</div>
			<div
				data-tooltip-id='eraser-tooltip'
				className={cx(styles.iconWrapper, {
					[styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
				})}
				onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
				<FontAwesomeIcon icon={faEraser} className={styles.icon} />
				<Tooltip id='eraser-tooltip' content='eraser' />
			</div>
			<div
				data-tooltip-id='undo-tooltip'
				className={styles.iconWrapper}
				onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}>
				<FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
				<Tooltip id='undo-tooltip' content='undo' />
			</div>
			<div
				data-tooltip-id='redo-tooltip'
				className={styles.iconWrapper}
				onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}>
				<FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
				<Tooltip id='redo-tooltip' content='redo' />
			</div>
			<div
				data-tooltip-id='download-tooltip'
				className={styles.iconWrapper}
				onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}>
				<FontAwesomeIcon
					icon={faFileArrowDown}
					className={styles.icon}
				/>
				<Tooltip id='download-tooltip' content='download' />
			</div>
		</div>
	);
}

export default Menu;