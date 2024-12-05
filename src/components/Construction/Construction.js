import React, { useState, useEffect } from 'react';
import './Construction.css';

const constructionPhotos = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1591211589340-df49dc2b0c03',
        title: 'High-rise Construction',
        location: 'Downtown, City Center',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1531564637012-b14387a6d987',
        title: 'Bridge Engineering',
        location: 'Riverfront, Metropolis',
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1553309265-69d9b251b7df',
        title: 'Residential Housing',
        location: 'Suburban Area, Hillside',
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1579546928687-b5f542247b31',
        title: 'Heavy Machinery in Action',
        location: 'Construction Site, Outskirts',
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1505842465776-3ff3ee7d47a7',
        title: 'Skyscraper under Construction',
        location: 'Urban Skyline, Downtown',
    },
];

const Construction = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            setPhotos(constructionPhotos); // Simulated fetch
            setError('');
        } catch (err) {
            setError('Failed to fetch construction photos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <div className="construction-container">
            <div className="logo-container">
                <img
                    src="https://t3.ftcdn.net/jpg/05/18/89/58/360_F_518895860_Ag4x1KrBZsKES247XiqW0ywPWdiupbdj.jpg"
                    alt="SAK Logo"
                    className="sak-logo"
                />
            </div>
            <h1 className="construction-title">Construction Projects Gallery</h1>
            {loading && <p className="loading-text">Loading...</p>}
            {error && <p className="error-text">{error}</p>}
            <div className="construction-gallery">
                {photos.map((photo) => (
                    <div key={photo.id} className="construction-card">
                        <img src={photo.url} alt={photo.title} className="construction-image" />
                        <div className="construction-details">
                            <h3 className="construction-title">{photo.title}</h3>
                            <p className="construction-location">{photo.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Construction;
