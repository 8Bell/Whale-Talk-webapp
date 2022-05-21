import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { authService } from '../fbase';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
	root: {
		width: 'calc(100vw - 40px)',
		height: 65,
		position: 'fixed',
		bottom: 20,
		left: '20px',
		backgroundColor: 'rgba(220,220,220,0.2)',
		backdropFilter: 'blur(7px)',
		boxShadow: '0 0 20px 10px rgba(0,0,0,0.1)',
		borderRadius: '50px',
	},
});

export default function ChatsNavBottom() {
	const router = useRouter();
	const classes = useStyles();
	const [value, setValue] = React.useState('chats');

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};
	const onClick = () => {
		setValue('signOut');
		setTimeout(() => {
			confirm('로그아웃하시겠습니까?')
				? authService.signOut()
				: setTimeout(() => {
						setValue('chats');
				  }, 300);
		}, 300);
	};

	return (
		<div>
			<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
				<BottomNavigationAction
					onClick={() => {
						router.push('/friends');
					}}
					label='친구'
					value='friends'
					style={{ transform: 'translateY(4px)' }}
					icon={<PeopleAltRoundedIcon />}></BottomNavigationAction>

				<BottomNavigationAction
					label='채팅'
					value='chats'
					style={{ transform: 'translateY(4px)' }}
					icon={<ChatRoundedIcon />}></BottomNavigationAction>

				<BottomNavigationAction
					onClick={onClick}
					label='로그아웃'
					value='signOut'
					style={{ transform: 'translateY(4px)' }}
					icon={<LockRoundedIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}
