import React from 'react';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { AddProductContainer } from './styled';

export default function AddProductPage() {
    const initialForm = { title: '', description: '', price: '', category_id: '' };
    const { form, handleForm, resetForm } = useForm(initialForm);

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/products`, form)
        .then(() => {
            alert('Produto adicionado com sucesso!');
            resetForm(); 
        })
        .catch((err) => alert('Houve um erro ao adicionar o produto:', err));
    }

    return (
        <AddProductContainer>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Título" value={form.title} onChange={handleForm} required />
                <input name="description" placeholder="Descrição" value={form.description} onChange={handleForm} required />
                <input type="number" name="price" placeholder="Preço" value={form.price} onChange={handleForm} required />
                <select name="category_id" value={form.category_id} onChange={handleForm} required>
                    <option value="">Selecione a categoria</option>
                    <option value="1">Novo</option>
                    <option value="2">Usado</option>
                    <option value="3">Semi-novo</option>
                </select>
                <button type="submit">Adicionar Produto</button>
            </form>
        </AddProductContainer>
    );
}
