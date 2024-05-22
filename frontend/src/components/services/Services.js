import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Web Development', description: 'Build websites and web applications', link: 'https://example.com/web-development' },
    { id: 2, name: 'Mobile App Development', description: 'Develop mobile applications for iOS and Android', link: 'https://example.com/mobile-app-development' },
    { id: 3, name: 'Data Science', description: 'Analyze and interpret complex data', link: 'https://example.com/data-science' },
    { id: 4, name: 'UI/UX Design', description: 'Design user interfaces and user experiences', link: 'https://example.com/ui-ux-design' },
    { id: 5, name: 'Digital Marketing', description: 'Promote products or services through digital channels', link: 'https://example.com/digital-marketing' }
  ]);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceDescription, setNewServiceDescription] = useState('');
  const [newServiceLink, setNewServiceLink] = useState('');

  const handleAddService = () => {
    const newService = {
      id: services.length + 1,
      name: newServiceName,
      description: newServiceDescription,
      link: newServiceLink
    };
    setServices([...services, newService]);
    setNewServiceName('');
    setNewServiceDescription('');
    setNewServiceLink('');
  };

  return (
    <div>
      <h1>SkillBoost Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              {service.name}
            </a>
            {' - '}
            {service.description}
          </li>
        ))}
      </ul>
      <h2>Add New Service</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={newServiceName}
        onChange={e => setNewServiceName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Description"
        value={newServiceDescription}
        onChange={e => setNewServiceDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Service Link"
        value={newServiceLink}
        onChange={e => setNewServiceLink(e.target.value)}
      />
      <button onClick={handleAddService}>Add Service</button>
    </div>
  );
};

export default Services;