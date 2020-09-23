import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './styles.css';

const Page = styled.main`
position: absolute;
top: 10%;

padding: 0;
margin: 0;

color: white;
background: var(--color-primary);

align-items:center;
min-height: calc(100vh - var(--bodyPaddingTop));

`;
const Image = styled.div`
margin-top: 5%;
border-radius:10px;
width: 298px;
height: 197px;
background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUSEhIWFRMWGBgWFhYYGBUaGBcVGxUXGBcXFRUYHyggGBolGxgWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0mICUrLystLSstLS4tLTUvLS03Ly0tLS0tLS0tLS0tLTYtLS0tLS0tLS0uLS0tLSstLS0tLf/AABEIAMgA+AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQBBwj/xAA8EAACAQIDBAcFBgUFAQAAAAAAAQIDEQQhQQUSMVEGEyJhcYGhMpGxwfBCUnLR4fEUI4KSogcVMzRisv/EABoBAQACAwEAAAAAAAAAAAAAAAAFBgECAwT/xAAuEQACAgEDAgUDAwUBAAAAAAAAAQIDEQQFMRIhE0FRYXEUIlI0gbGRwdHh8Ab/2gAMAwEAAhEDEQA/AMgAUQooAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIbbu3o4fspb1RrhyyybJTFVlThKb4RTZ8rxOJdSpKpJ3cnfxzJLbtIrpOU+ESm2aKN83KfCJue1q9a7lK0eSbSNP+51IyvHeVtbskujuFhWvvWck0kvspatrmW2rsjCbqXU5pZu7u34k/wBFcVhRRbK9JDpxGKx8Ef0f2n19PtPtx4960diVI14aFGN6MbNZ+Pc/IkISuk1qkyvbhp1XPqjwyrbvofp7OpcSMgAR5EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEZ0kv/AAtS3L0uj5jN2Z9cxNFThKD4STR80pYJuq6VtWm7Zq2vfYn9nmuiUffJZNjmnCUPPOSf6G0nCk6j4N5eRMYrpGoZRjd8LvJe4jOjNRxjKnL7ErW7uHHlqT9OnQqZOmr8+Hfm0SUuSz1r7exwY7EYieFVaK7Lk1K2keeej4EthP8Ajj+FfA2YnbFKgrTi7WtGCX2eb0sYYeopRTj7L4eGnAi9zWak/cgv/QxzTF+j/sbQAQRUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyckk2+CzfgfOMNiP58pLjvOS/uuX3a0HKjUS4uLtnb1PnOxsFOU2/uxcreFl8yd2iH2zZY9hil1S+EWHB4pbzb4yd/jZEvhsclm/wB7FejTvG6EJtZolMFnTJ/GbanJNSdlyjFSfddvsr3HbsX/AIYvm21w4XfIqmPxs40XN5pSSSffrkbtidKtyChUhkslKPLvWp49dROyrEF5kVvFc7qOiCy85LmDiwu1aNT2Zq/J5P1OxMrs65weJLBTZ1Tg8STR6ADQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAANWIrxprenJJd5X9odKUrqlG//AKfyRE9JsW515RvlHJL4kQpFh0e2V9CnZ3b74LFotrr6FOzu33x5EpLaNWvNb8m1m7aWV3wR1dEYp1WnqpLzs2l/iReAnaaenB+DyOzYOMVDEU5SXZVWO9+G7UvRv3ExCEYLEVhEzCMYLEVgu9Lo3HEQco/y52u7+w7LNz+7lnde4rktjVIt78d2KSd7p7ydrNd3DPvPrWK2ZvUHThJR3uLaycbp28HYqmxujzk60m31Ma1VPeb3pVXlaK0ha17+BvKpHSNrPnfSWVqSillvJe5NkLs2lvNr64XLv/qTsSGHVBK6c9+Vr3SSsk0++7/UqGFrRpZqLcmsl35Zt6GqjgSlk8R2YTadWk+zN25Pgccpc/08jByMShGSxJZOUoxksNZL7sHa/wDEJppKcbXtqufvJY+d9HcY6WIi/sy7MvB/qfRCr7lplTb9vDKvuemjTb9q7MAAjiNAAAAAAAAAAAAAAAAAAAAAAAABpxmIVOnKb0V/PRG4r/TTF7lDdvnJr3Lj8jtp6vEtjD1Z201Xi2xh6spNas5ycnxbb783zPE7M01MndcH6MzjIuiWFgu2McG+ST/P9Q23xvc8g7o8UjYH6D6H4t4rDUKt07xSlf70ezJf4+ps2K+shWen8VXv49a7X8olT/0d2relUw8uMJKpH8MrKVvNL+4uPROO9Rb0dfESfe+vll7jqnnBoz5j/rDiN/HRhpTpQjbk3eb+KKJoT3TXF9dj8RO911kkvCL3V6L1IBq7t5v5fM5vk3PJmEnkZzNNSXx9DUC9s35H0jo9j+voRk/aXZfitfdY+bz7Vo/VlqWbodjdyq6X2ZrLlvK/yv6EfuVHi0t+a7ng3KjxaH6ruXQAFUKkAAAAAAAAAAAAAAAAAAAAAAAACj9McTv19zSCtpxebLvOVk3yzPl+PqOpOU3rJv69CX2erqtc/RfyTGzVdVjn6L+TikrZPho/k1qY0pmypF9z8dDmm7MshZDroT0N7djhjUzOxZoAsvQDaiw+Optu0J3pSfJS4N/1bp9k6G1d3AQqPXraj86lSXyZ+eKMtNV7/E+5UcVGnsJVU+OGkr/+neFvKUmdIMwz4piq29KU2+Lcn5ttnKpe95nuJlmoc/gjKozQyaHOXL3mmc81fPuNtaRySZgHVTxCT4Xf16HZgcR1dRTXFNP3O9iPp1oxWSz5iEW87hrKww1k+vU5qSUlwauvBmRUehO0ZO9CbvZb0OOS1Xz95binavTui1x/oU3Wad0WuP7oAA8p5QAAAAAAAAAAAAAAAAAAAADk2tUUaFRvgoS+Dt6ny2lSnN2gpNvTifVsbh1Vpyg+ElYrmytnRw1POzn9qXyXcWDZpLokvPJY9jw4SXuROD6OOSvVm0+UbZeL1Zth0cpQ9r+ZLk5fFQV/U73ip1pbtOW7Be1Jcb6RXf36XNO08d1MHGmrSvnLLXm3k3bmTGSe6UclXZFB2i0qc+UZOSS0k76XIqphKlL24tLSXGL8GjN0VO27V3qr4p+zw+9xOrA4erGSVR9h3TV7rP70eWgyYaTI6pzXH4lxwXSJf7HXoN5xr07LXcneTXlKm/7isY/DdXPL2Xmvy8iOqwz48ePLLhkbpnNozw+bcn5GychTWXkWLZfRGrWW9VkqEGrreT3mtXu3W6vEw2lyZUXJ9ipzV8kZwwX3uPJfmTO0dizwslvZqV92Wea8HwZxSf1mZTTDTXZmiFJR1fyMpUlLglfmeymjUo55XBgsnQrBvrpT0jG3i3+zLsRPRnZ/UUVe+9PtS7uSJYqe5XKy944XYqe53Ky948uwAB4CPAAAAAAAAAAAAAAAAAAAAAOfG1d2Pjl+ZW9pYrdVl5+P5kvtWrn+Ferz+BB0mpzlJ23YZLvk/wAl8S0bdT4dKb5fcuO1afwtOm+Zd/8ABlT3qULcZPjlxk/pLyNMaWe4rOat2mslOXGT8EvUzb3qiX3VvebyXzI2WLSlVk9JWtzsrfJnvJJnPs3ATqVVTS/mSk7t6c23yVm2XjC9F4LOVScrK10lw9cr8yA6LV0lOrJrrKnYjx9ldqo149iPmyx4fEyytW6tvKzjeL8zWyTXBvTFPuyP2x0ccqbdGfWtO6V0pKytZaPUrmz+j+IxFXq403FxT35TTjGmuDc5Pgve3pcvGIVT27JPWdN7yf4oa+7zImt0hmouNWb3N7efHjzUXr4mIzZmdSZvwuLw2Dju0aanVsoyqPNtq12t72M+Vj2hjq1R70rSzyvZQj33ftS99irVNsJy3nG+d9OPPdNeM263xUn4tJeGRhxk+TKnFcE30pxLnDOpvtW0do56PXL4FTlUM8TtiU1uqKjfjbPLzNMObfgjpBNLucLGpPKMo097Li9P2Lj0d6NqCVSsrvioPgu+Xf3ErsTBUYUoTpwS3op7zzlmuZJEJrdzl3rr7e5XNdujy661j1YABBkCAAAAAAAAAAAAAAAAAAAAAAwc+Oq7kG/I3rg5zUV5m9VbsmoLzeCv7Yxdt5rnl3u3poaaUdymot9rjLvlqzkdqtZXzUO089b5L3/A92vW3Kb5y7K8/plyjHpSS8i/RioxSXkebMlffqaSlZfhWS+ZG7VwnVQu81Jp/wBV80TGFhuQjHkkQXSHEOdRQTyj/wDVv2RuZfBrwm2Z047m5GUE3JKW92ZNW3k4tZ2+RJYHpNUpO04xnH7sle/l7zzZWzFGLc0nK7S5JLl45mzEbPjNrJZSXmrq6EkmYi2uDsxO3aLW9RUqbas452u/u8kQ2PxzqpSdr696tx8nc3bawEaSvHg9Phb1Iqfs2+uNzVRSNpTb7GVzlrvMx3mYHU4nqNtNmlG6mvryMMyj6T0Sm3ho3d7OSXhx+ZMkH0O/639UvkThUNf+on8lN3D9TP5AAPIeMAAAAAAAAAAAAAAAAAAAAAERt2vZW7rkuVHbOLU5yz4cPUk9rq67ur0JfZqeu/rfETnwPCUuF38P3OSUnVrX+zD4nThZOVKLXGV+FtW8+42xoxpwt/dnxepZC2GE52TfL6+RW1HeqxvneS+KJrGV04tLXK+n65X9xHYWl/Mj3fkDVk3Gtnbl9fI3J5p82kcl/iZ0Zb1SnHO2bf8ASjJkbdi5RSSzbS9GceE2eku1nl9XOza8moq3G7t7pG2nLJa5IwGVaMeK1Ta9ztcwnh7nZtClu1nylmvP6ZqazOiOTORUjbGBteR4gMn0LonTawsL6tv1t8iYOHYcN3D0k/uL1zO4pmrlm6T92UvWS6r5v3YAB5zzAAAAAAAAAAAAAAAAAAAAAEZtzGdXCy4y+BRdoycm3m1YuXSWi3GMtFkytU6Svnmr8CzbXGKoTX7lu2iMFpk48vkx2XJulBXeSfDxNtSK5Xfe/kZ0oJZWstEuXDQ25JEiShHVcPUlo39d9j1YWcJwd+znvLXetrzO6M73+Hlc1VamWfkZAsbsH7bfHs+tzllP4HHjcbu7yu1vLTmYB3bVrpxtdX42v3ae8gZ7QqLJVHY5ZVddTU2bJGjkdNTEynnKTduFzfCd0cdJGy9snw5/WhsanU2eU1fLvS8DXJ5Ez0e2RLET3r2hFref5I522Rri5SfY52WRri5SeEfQaEN2MVySXobDxI9KVJ5bZSJvMmwADU1AAAAAAAAAAAAAAAAAAAAAMKtNSTi+DK1iuj1Xee5JOOmjXkAenT6uyjPR5nr02tt0+eh8mnaOy5UKbqSadtFf4lerbXay6v1YBYNBqJ3QzP1LJt2rsvrcp85OepteeiUfU0Ua0pzW82/3AJBokEyXbIrakrtef18DwGEZlwcB6gDc5m6Ds/rvM5NPieAGRCiuZc+gVTOpHwaAPHr0np5/B49es6efwXAAFQKcAAAAAAAAACP2pjHScO1GKe9dtN8I3WSa1PQd9LFStSf/AHY9GkipXRUl2/0csse0/wDs0La9mV7XXJ8bXy7jGe1Gk311JvSyybvbPtXS1AJr6ar8UTn0tP4o1V9rTjFvrqLdsoqLz/y+s/P0Ax9NV+KMfS0/ij//2Q==);
color: black;
display: block;
margin-right: auto;
margin-left: auto;
`;

function NotFoundPage() {
    return (
        <>
            <Page>
                <Image />
                <br />
                <h1>Pagina não encontrada!</h1>
                <Link className="linkToHome" to="/">Voltar para a Home</Link>
            </Page>
        </>
    )
}
export default NotFoundPage;