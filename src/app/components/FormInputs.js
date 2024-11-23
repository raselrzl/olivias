/* const FormInputs = ({ formData, handleChange, errors }) => {
  function generateTimeOptions() {
    const options = [];
    const start = 15; // 3 PM
    const end = 21; // 11 PM

    // Generate time options with 15-minute intervals
    for (let hour = start; hour <= end; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${padZero(hour)}:${padZero(minute)}`;
        options.push(time);
      }
    }

    return options;
  }

  // Function to pad single digits with zero (e.g., 3 -> 03)
  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  return (
    <>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-black"
        >
          phoneNumber
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="date"
          className="mt-4 block text-sm font-medium text-black"
        >
          Booking Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.date && (
          <p className="mt-1 text-xs text-red-500">{errors.date}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="time"
          className="mt-4 block text-sm font-medium text-black"
        >
          Booking Time
        </label>
        <select
          name="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a time</option>
          {generateTimeOptions().map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && (
          <p className="mt-1 text-xs text-red-500">{errors.time}</p>
        )}
      </div>

      <div>
  <label htmlFor="numPeople" className="block text-sm font-medium text-black mt-4">
    Number of People
  </label>
  <input
    type="number"
    name="numPeople"
    id="numPeople"
    value={formData.numPeople}
    onChange={handleChange}
    className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    min="1"
  />
  {formData.numPeople > 8 && (
    <p className="mt-1 text-xs text-red-500">For bookings over 8 people, please call us directly.</p>
  )}
  {errors.numPeople && (
    <p className="mt-1 text-xs text-red-500">{errors.numPeople}</p>
  )}
</div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-black"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-black"
        >
          Personal Preference
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="4"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
    </>
  );
};

export default FormInputs;


 */

const FormInputs = ({ formData, handleChange, errors }) => {
  function generateTimeOptions() {
    const options = [];
    const start = 15; // 3 PM
    const end = 21; // 11 PM

    // Generate time options with 15-minute intervals
    for (let hour = start; hour <= end; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${padZero(hour)}:${padZero(minute)}`;
        options.push(time);
      }
    }

    return options;
  }

  // Function to pad single digits with zero (e.g., 3 -> 03)
  function padZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  return (
    <>
      {/* Full Name and Phone Number in one row for larger screens */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-black"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      {/* Email and Subject in one row for larger screens */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="personnummer"
            className="block text-sm font-medium text-black"
          >
            Personnummer
          </label>
          <input
            type="text"
            name="personnummer"
            id="personnummer"
            value={formData.personnummer}
            onChange={handleChange}
            maxLength={12} // Maximum length for the full format (YYYYMMDDXXXX)
            pattern="\d{10}|\d{12}" // Ensures input is 10 or 12 digits
            placeholder="YYYYMMDDXXXX"
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.personnummer && (
            <p className="mt-1 text-xs text-red-500">{errors.personnummer}</p>
          )}
        </div>
      </div>

      {/* Date, Time, and Number of People in one row for larger screens */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-black"
          >
            Booking Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.date && (
            <p className="mt-1 text-xs text-red-500">{errors.date}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-black"
          >
            Booking Time
          </label>
          <select
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select a time</option>
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-xs text-red-500">{errors.time}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="numPeople"
            className="block text-sm font-medium text-black"
          >
            Number of People
          </label>
          <input
            type="number"
            name="numPeople"
            id="numPeople"
            value={formData.numPeople}
            onChange={handleChange}
            className="mt-1 block w-full h-8 border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            min="1"
          />
          {formData.numPeople > 8 && (
            <p className="mt-1 text-xs text-red-500">
              For bookings over 8 people, please call...
            </p>
          )}
        </div>
      </div>

      {/* Message in a separate row */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-black"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 p-2 text-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
      </div>
    </>
  );
};

export default FormInputs;
