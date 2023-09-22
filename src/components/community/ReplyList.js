import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    whiteText: {
        color: '#fff'
    },
    whiteBorder: {
        
    },
});

const ReplyList = ({ replies, onDeleteReply, onUpdateReply }) => {
    const [editingReplyId, setEditingReplyId] = useState(null);
    const [updateReply, setUpdateReply] = useState(''); // updatedContent 상태 추가
    const nickname = 'nickname1';
    const classes = useStyles();


    const handleEditClick = (replyId, content) => {
        setEditingReplyId(replyId);
        setUpdateReply(content); // 수정 중인 댓글의 내용을 설정
    };

    const handleCancelEdit = () => {
        setEditingReplyId(null);
        setUpdateReply(''); // 수정 취소 시 updatedContent 초기화
    };

    const handleUpdateReply = (replyId) => {
        if (updateReply.trim() === '')  {
            alert("댓글 내용을 입력해주세요.");
            return;
        }
        onUpdateReply(replyId, updateReply); // replyId와 updatedContent를 상위 컴포넌트로 전달
        setEditingReplyId(null);
        setUpdateReply(''); // 수정 후 updatedContent 초기화
    };

    const handleDeleteReply = (replyId) => {
        if (window.confirm('댓글을 삭제하시겠습니까?')) {
            onDeleteReply(replyId);
        }
    };

    return (
        <div style={{ marginBottom: '20px'}}>
            <List>
                {replies.map(reply => (
                    <ListItem key={reply.replyId}>
                        <Avatar src={reply.profileImage} style={{margin: '0 5px'}}/>
                        <ListItemText
                            primary = {
                                <div style={{padding: '0 10px', width: '100%'}}>
                                    <div style={{fontWeight: 'bold'}}>{`${nickname}`}</div>
                                    {
                                        editingReplyId === reply.replyId ? (
                                            <TextField
                                                value={updateReply}
                                                onChange={(e) => setUpdateReply(e.target.value)}
                                                InputProps={{
                                                    className: classes.whiteBorder,
                                                    style: { whiteSpace: 'pre-line', color: 'white', minWidth: '480px',},
                                                }}
                                                variant='outlined'
                                                InputLabelProps={{
                                                    className: classes.whiteBorder,
                                                }}
                                                multiline
                                                rows={4}
                                            />
                                        ) : <span className={classes.whiteText} style={{ whiteSpace: 'pre-line' }}>{reply.content}</span>
                                    }
                                </div>
                            }
                        />
                            
                        {editingReplyId === reply.replyId ? (
                            <div>
                                <div style={{marginBottom: '5px'}}>
                                    <Button color='primary' variant="outlined" onClick={() => handleUpdateReply(reply.replyId)}>저장</Button>
                                </div>
                                <div style={{marginTop: '5px'}}>
                                    <Button color='secondary' variant="outlined" onClick={handleCancelEdit}>취소</Button>
                                </div>
                            </div>
                        ) : (
                            <Button color='primary' variant="outlined" onClick={() => handleEditClick(reply.replyId, reply.content)}>수정</Button>
                        )}
                        <Button color='secondary' variant="outlined" onClick={() => handleDeleteReply(reply.replyId)} style={{margin: '0 5px'}}>삭제</Button>

                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ReplyList;
