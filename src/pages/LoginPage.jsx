import React from 'react';
import { Button, Form, Input, message, Typography } from 'antd';
import axios from 'axios';

// Ant Design komponentlari bilan ishlash
const { Title } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log('Yuborilayotgan ma\'lumotlar:', values);
    
    // Foydalanuvchiga yuklanish jarayonini ko'rsatish
    messageApi.open({
      type: 'loading',
      content: 'Tizimga kirilmoqda...',
      duration: 0,
      key: 'login_msg'
    });

    try {
      const res = await axios.post(`https://v1.turbotravel.uz/api/auth/signin`, values);
      
      console.log('Javob:', res);
      
      if (res.status === 200 || res.status === 201) {
        messageApi.open({
          type: 'success',
          content: 'Muvaffaqiyatli kirdingiz!',
          key: 'login_msg',
          duration: 2,
        });
        // Bu yerda tokenlarni saqlash yoki sahifani yo'naltirish mumkin
      }
    } catch (error) {
      console.error('Login Error:', error);
      messageApi.open({
        type: 'error',
        content: 'Xatolik yuz berdi! Internetni yoki ma\'lumotlarni tekshiring.',
        key: 'login_msg',
        duration: 3,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    messageApi.warning('Iltimos, barcha majburiy maydonlarni to\'ldiring!');
  };

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      backgroundColor: "#f0f2f5" // Orqa fon uchun och rang
    }}>
      {contextHolder}
      <Form
        form={form}
        name="login_form"
        layout="vertical" // Label'lar input tepasida turishi uchun
        style={{ 
          maxWidth: 400, 
          width: "100%", 
          padding: "30px", 
          borderRadius: "10px", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Chiroyliroq soya
          backgroundColor: "#ffffff",
          border: "1px solid #d9d9d9"
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={3}>Kirish</Title>
        </div>

        <Form.Item
          label="Telefon raqam"
          name="phone_number"
          rules={[{ required: true, message: 'Iltimos, telefon raqamingizni kiriting!' }]}
        >
          <Input placeholder="+998 90 123 45 67" size="large" />
        </Form.Item>

        <Form.Item
          label="Parol"
          name="password"
          rules={[{ required: true, message: 'Iltimos, parolni kiriting!' }]}
        >
          <Input.Password placeholder="Parolni kiriting" size="large" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Tasdiqlash
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage  ;