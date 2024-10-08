import React, { useEffect } from 'react';
const axios = require('axios');

const buttonStyle = {
    backgroundColor: '#4CAF50', // Màu nền
    color: 'white', // Màu chữ
    padding: '15px 32px', // Khoảng cách bên trong
    textAlign: 'center', // Căn giữa chữ
    textDecoration: 'none', // Xóa gạch chân
    display: 'inline-block', // Hiển thị dạng inline-block
    fontSize: '16px', // Kích thước chữ
    margin: '4px 2px', // Khoảng cách giữa các nút
    cursor: 'pointer', // Hiển thị con trỏ khi hover
    border: 'none', // Xóa viền
    borderRadius: '4px' // Bo góc
};

function Home() {

    useEffect(() => {
        fetch('http://localhost:3001/home')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); // Chuyển đổi dữ liệu JSON từ response
        })
        .then(data => {
            console.log(data); // Xử lý dữ liệu đã nhận
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            <div style={{ width: 1920, height: 249, left: 0, top: 0, position: 'absolute', background: '#413939' }} />
            {/* <div style={{width: 219, height: 80, padding: 12, left: 53, top: 298, position: 'absolute', background: '#2C2C2C', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}> */}
            {/* <div style={{color: '#F5F5F5', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>button</div> */}
            <button style={{ width: 219, height: 80, padding: 12, left: 53, top: 298, position: 'absolute', background: '#2C2C2C', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex', color: '#F5F5F5' }} onClick={() => {console.log("ok");}}>BUTTON</button>
            {/* </div> */}
            <div style={{ width: 114, height: 108, left: 1779, top: 290, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
            <div style={{ width: 1763, height: 684, left: 73, top: 606, position: 'absolute', background: '#D9D9D9' }} />
            <div style={{ width: 1763, height: 684, left: 73, top: 1401, position: 'absolute', background: '#D9D9D9' }} />
        </div>
    );
}
  
export default Home;