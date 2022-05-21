import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Zoom } from '@material-ui/core';
// import { useRouter } from 'next/router';
import { dbService } from '../fbase';
import Router from 'next/router';
import Link from './Link';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100vw',
			height: 70,
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 1,
			backgroundColor: 'rgba(220,220,220,0.3)',
			backdropFilter: 'blur(7px)',
			boxShadow: '0 0 12px 6px rgba(0,0,0,0.1)',
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			color: '#444',
			marginTop: 9,
		},
		plusIconBtn: {
			position: 'absolute',
			zIndex: 2,
			top: 8,
			right: 10,
			color: '#444',
		},
		nextIconBtn: {
			position: 'absolute',
			zIndex: 2,
			top: 8,
			right: 10,
		},
		nextIconText: {
			marginRight: 5,
			fontSize: 22,
			fontWeight: 500,
		},
	})
);

interface props {
	chatMakingState: any;
	setChatMakingState: any;
	setAddFriendState: any;
	checkedState: any;
	setCheckedState: any;
	myAccount: any;
	users: any;
}

export default function FriendsNavTop({
	chatMakingState,
	setChatMakingState,
	setAddFriendState,
	checkedState,
	setCheckedState,
	myAccount,
	users,
}: props) {
	// const router = useRouter();
	const classes = useStyles();
	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	// 친구 추가하기 - 모달창 열기

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAddChat = () => {
		setAnchorEl(null);
		setChatMakingState(!chatMakingState);
	};
	const handleStartChat = async () => {
		const mydata = users.filter((user: { id: any }) => user.id == myAccount.uid);
		const userArr = users.filter((user: { id: any }) => user.id !== myAccount.uid);
		const memberArr = userArr
			.filter((_user: any, index: number) => checkedState[index] === true)
			.concat(mydata);

		const memberUidArr = memberArr.map((member: { id: any }) => member.id);

		if (memberArr.length > 1) {
			setChatMakingState(!chatMakingState);
			await dbService
				.collection('chats')
				.doc(memberUidArr.sort().join(''))
				.set({
					createdAt: Date.now(),
					chatId: memberUidArr.sort().join(''),
					host: myAccount.uid,
					memberUid: memberUidArr,
					title: null,
					lastDialogue: '',
					lastDialogueAt: Date.now(),
				});

			setCheckedState(new Array(users.length).fill(false));

			await Router.push('/chats');
		} else {
			alert('채팅할 친구를 선택해주세요');
		}
	};
	const handleAddFriend = () => {
		setAnchorEl(null);
		setAddFriendState(true);
	};

	return (
		<div>
			<AppBar className={classes.root}>
				<Toolbar>
					<Typography variant='h5' className={classes.title}>
						친구
					</Typography>
					{auth && (
						<div>
							<Zoom in={!chatMakingState}>
								<IconButton
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}
									color='inherit'
									className={classes.plusIconBtn}>
									<AddRoundedIcon style={{ fontSize: 30 }} />
								</IconButton>
							</Zoom>
							<Zoom in={chatMakingState}>
								<IconButton
									color='primary'
									onClick={handleStartChat}
									className={classes.nextIconBtn}>
									<Typography className={classes.nextIconText}>
										채팅
									</Typography>
									<ArrowForwardIosRoundedIcon />
									<Link href='/chats' />
								</IconButton>
							</Zoom>

							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}>
								<MenuItem onClick={handleAddChat}>
									채팅 추가하기
								</MenuItem>
								<MenuItem onClick={handleAddFriend}>
									친구 추가하기
								</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
