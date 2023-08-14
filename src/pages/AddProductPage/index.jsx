

export default function AddProductPage() {
    const { form, handleForm } = useForm({
        title: '',
        description: '',
        price: '',
        category_id: '',
    });

    const addProduct = (productData) => {
        axios.post(`${import.meta.env.VITE_API_URL}/products`, productData)
            .then(res => alert('Produto adicionado com sucesso!'))
            .catch(err => alert('Erro ao adicionar produto.'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(form);
    };

    return (
        <div>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    placeholder="Título"
                    name="title"
                    value={form.title}
                    onChange={handleForm}
                />
                <input
                    required
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                />
                <input
                    required
                    type="number"
                    placeholder="Preço"
                    name="price"
                    value={form.price}
                    onChange={handleForm}
                />
                <select
                    required
                    name="category_id"
                    value={form.category_id}
                    onChange={handleForm}
                >
                    <option value="" disabled>Selecione a categoria</option>
                    <option value="1">Novo (30 pontos)</option>
                    <option value="2">Usado (10 pontos)</option>
                    <option value="3">Semi-novo (20 pontos)</option>
                </select>
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
}
