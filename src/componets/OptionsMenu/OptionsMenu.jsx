import {
    ContainerMenus,
    Navbar_Container,
    CardsOptions,
    ContainerCards,
    Carrito,
    LabelTitle,
    CardsLabel
  } from "./OptionsMenu.style";
  import Desayunos from "../../assets/Desayunos";
  import Comidas from "../../assets/Cenas";
  import Cenas from "../../assets/Comidas";
  import Bebidas from "../../assets/Bebidas";
  import Postres from "../../assets/Postres";
  
  const categorias = ["Desayunos", "Comidas", "Cenas", "Postres", "Bebidas"];
  
  const images = [
    {
      id: 1,
      title: "Desayunos",
      imageUrl: <Desayunos width="100%" height="100%" />,
    },
    {
      id: 2,
      title: "Comidas",
      imageUrl: <Comidas width="100%" height="100%" />,
    },
    {
      id: 3,
      title: "Cenas",
      imageUrl: <Cenas width="100%" height="100%" />,
    },
    {
      id: 4,
      title: "Bebidas",
      imageUrl: <Bebidas width="100%" height="100%" />,
    },
    {
      id: 5,
      title: "Postres",
      imageUrl: <Postres width="100%" height="100%" />,
    },
  ];
  
  const getCategoryImage = (category) => {
    const image = images.find((img) => img.title === category);
    return image ? image.imageUrl : null;
  };
  
  const OptionsMenu = () => {
    return (
      <ContainerMenus>
        <Navbar_Container>
          <LabelTitle> NombreRestaurante</LabelTitle>
          <Carrito/>
        </Navbar_Container>
        <ContainerCards>
          {categorias.map((categoria, index) => (
            <CardsOptions className="card" key={index}>
              {getCategoryImage(categoria)}
              <CardsLabel>{categoria}</CardsLabel>
            </CardsOptions>
          ))}
        </ContainerCards>
      </ContainerMenus>
    );
  };
  
  export default OptionsMenu;
  