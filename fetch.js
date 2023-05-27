const bookButton = document.getElementById('book-button')
const labSelect = document.getElementById('lab-select')
const startTimeInput = document.getElementById('start-time-input')
const endTimeInput = document.getElementById('end-time-input')

bookButton.addEventListener('click', async () => {
  const labName = labSelect.value
  const startTime = startTimeInput.value
  const endTime = endTimeInput.value

  try {
    const data = await async(labName, startTime, endTime)
    console.log('Successfully booked lab:', data)
  } catch (error) {
    console.error('Failed to book lab:', error)
  }
})

const availableLabs = await getAvailableLabs()
console.log('Available labs:', availableLabs)
