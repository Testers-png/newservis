import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
        	<PanelHeader>Предложить идею</PanelHeader>
				{fetchedUser &&
			<Group title="User Data Fetched with VK Connect">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
		
				</Cell>
			</Group>}
			<Div style={{ paddingTop: 20, paddingBottom: 0, color: 'gray' }}>
					В приложении "ВКонтакте" есть множество самых различних сервисов, с самыми разными функциями. Наш сервис отличается тем, что его создаёте именно вы.
					  <br/>
					  <br/>
				      Каждый пользователь "ВКонтакте" может предложить свою идею для нового раздела / новой функции и мы попытаемся реализовать её.
					</Div>
        
			<Group title="Navigation Example">
				<Div>
				<Button stretched mode="commerce" size="xl" level="2" onClick={go} data-to="persik">
				👇 Жмякни сюда 👇
			  <br/>
			  <br/>
			  <Button size="xl" level="2" onClick={go}>
              Помочь с созднии сервиса
             </Button>
            </Button>
			<br/>
		    Версия 1.0 (Beta)
					</Div>
				</Group>
		</Panel>
	
	
	);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	share: PropTypes.func,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
