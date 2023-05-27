const bookLab = async (labName, startTime, endTime) => {
    const response = await fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        labName,
        startTime,
        endTime
      })
    })
  
    if (!response.ok) {
      throw new Error(`Failed to book lab: ${response.status}`)
    }
  
    const data = await response.json()
    return data
  }
  
  const getAvailableLabs = async () => {
    const response = await fetch('/labs')
  
    if (!response.ok) {
      throw new Error(`Failed to retrieve available labs: ${response.status}`)
    }
  
    const data = await response.json()
    return data
  }
  