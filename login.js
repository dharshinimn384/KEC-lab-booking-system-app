function Login() {
      return (
        <div>
          <link rel="stylesheet" href="style.css" />
          <title>KEC LAB BOOKING</title>
          <link rel="stylesheet" href="style.css" />
          <header>
            <h1>KEC LAB BOOKING(AI)</h1>
          </header>
          <main>
            <form>
              <label htmlFor="name">Faculty Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="name">Faculty Designation:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="name">Course name:</label>
              <input type="text" id="name" name="name" />
              <div className="Hall-container">
                <label>Choose Lab</label>
                <select id="Hall">
                  <option value="ma">AIMLCC1</option>
                  <option value="cc">AIMLCC2</option>
                  <option value="jt">AIDSCC3</option>
                  <option value="jn">AIDSCC4</option>
                  <option value="jn">AIDSCC5</option>
                </select>
              </div>
              <br />
              <label htmlFor="number">Capacity:</label>
              <input type="number" id="number" name="number" />
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" />
              <label htmlFor="time">Select time slot:</label>
              <select id="time" name="time" required>
                <option value selected disabled>Select time slot</option>
                <option value="9am-11am">8.45am-11.35am</option>
                <option value="11am-1pm">11.35am-12.30pm</option>
                <option value="1pm-3pm">1.30pm-4.15pm</option>
                <option value="1pm-3pm">1.30pm-3.15pm</option>
                <option value="3pm-5pm">3.30pm-4.15pm</option>
              </select>
              <br /><br />
              <label htmlFor="purpose">Purpose:</label>
              <textarea id="purpose" name="purpose" defaultValue={""} />
              <button type="submit">Book Lab</button>
            </form>
          </main>
          <footer>
            <p>©   KEC CC Lab Booking (AI)</p>
          </footer>
        </div>
      );
    }
export default Login