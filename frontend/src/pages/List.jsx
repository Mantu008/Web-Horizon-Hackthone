import React from 'react';
import Navbar from '../components/Navbar';
import Hadder from '../components/Hadder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight, faCheck, faUtensils, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { hotel } from '../data/hotel';
import Footer from '../components/Footer';

const List = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <Navbar />
            <Hadder />
            <div className="container mx-auto p-4">
                <div className="flex">
                    {/* Filters Section */}
                    <div className="w-1/4 bg-white p-4 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">Filters</h2>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Most Popular</h3>
                            <div className="flex items-center mb-2">
                                <input className="mr-2" id="free-cancellation" type="checkbox" />
                                <label htmlFor="free-cancellation">Free Cancellation</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input className="mr-2" id="free-breakfast" type="checkbox" />
                                <label htmlFor="free-breakfast">Free Breakfast</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input className="mr-2" id="rated-exceptional" type="checkbox" />
                                <label htmlFor="rated-exceptional">Rated Exceptional (9+)</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input className="mr-2" id="parking-available" type="checkbox" />
                                <label htmlFor="parking-available">Parking Available</label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Price</h3>
                            <div className="h-24 bg-gray-200 rounded mb-2"></div>
                            <div className="text-sm text-gray-600">₹0 - ₹10,000</div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">User Rating</h3>
                            {['exceptional', 'excellent', 'very-good', 'good', 'pleasant'].map((rating, index) => (
                                <div className="flex items-center mb-2" key={index}>
                                    <input className="mr-2" id={rating} name="user-rating" type="radio" />
                                    <label htmlFor={rating}>{rating.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} 9+</label>
                                </div>
                            ))}
                        </div>
                        {/* Facilities Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Facilities</h3>
                            {['room-service', 'cctv-security', 'non-smoking-rooms'].map((facility) => (
                                <div className="flex items-center mb-2" key={facility}>
                                    <input className="mr-2" id={facility} type="checkbox" />
                                    <label htmlFor={facility}>{facility.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</label>
                                </div>
                            ))}
                        </div>
                        {/* Star Rating Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Star Rating</h3>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div className="flex items-center mb-2" key={star}>
                                    <input className="mr-2" id={`${star}-star`} type="checkbox" />
                                    <label htmlFor={`${star}-star`}>{star} Star ({star})</label>
                                </div>
                            ))}
                        </div>
                        {/* Accommodation Type Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Accommodation Type</h3>
                            {['homestay', 'hotel', 'apartment', 'hostel', 'resort', 'guest-house'].map((type) => (
                                <div className="flex items-center mb-2" key={type}>
                                    <input className="mr-2" id={type} type="checkbox" />
                                    <label htmlFor={type}>{type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} (1)</label>
                                </div>
                            ))}
                        </div>
                        {/* Payment Mode Section */}
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Payment Mode</h3>
                            {['pay-at-hotel', 'prepaid'].map((mode) => (
                                <div className="flex items-center mb-2" key={mode}>
                                    <input className="mr-2" id={mode} type="checkbox" />
                                    <label htmlFor={mode}>{mode.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Listings Section */}
                    <div className="w-3/4 ml-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Your Hotels</h2>
                            <select className="border rounded p-2">
                                <option>Popularity</option>
                            </select>
                        </div>

                        {/* Hotel listing */}
                        {hotel.map((hotels) => (
                            <div className="flex mb-4" key={hotels.id}> {/* Add unique key here */}
                                <div className="relative w-1/3">
                                    <img
                                        src={hotels.image}
                                        alt="Hotel lobby with reception desk and seating area"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Last Minute Deal</div>
                                    <div className="absolute top-2 right-2 bg-white text-gray-500 rounded-full p-1">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    </div>
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <button className="bg-white text-gray-500 rounded-full p-1">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </button>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <button className="bg-white text-gray-500 rounded-full p-1">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-2/3 p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-bold">{hotels.name}<span className="text-gray-500">★★★★☆</span></h2>
                                            <p className="text-gray-500">{hotels.distance}</p>
                                            <div className="flex items-center mt-2">
                                                <span className="text-blue-500 font-bold text-lg">{hotels.rating}</span>
                                                <span className="ml-2 text-blue-500 font-bold">{hotels.ratingText}</span>
                                                <span className="ml-2 text-gray-500">• {hotels.ratingsCount}</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-green-500 font-bold"><FontAwesomeIcon icon={faCheck} /> Free Wifi</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-green-500 font-bold"><FontAwesomeIcon icon={faUtensils} /> Restaurant</span>
                                                <span className="text-green-500 font-bold ml-4"><FontAwesomeIcon icon={faConciergeBell} /> Concierge</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold">₹{hotels.price}</p>
                                            <span className="text-gray-500">per night</span>
                                            <button className="bg-blue-500 text-white rounded mt-2 p-2">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default List;
