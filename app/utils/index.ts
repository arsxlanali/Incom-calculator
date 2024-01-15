export const getRecentYears = () => {
    const currentYear = new Date().getFullYear();
    const recentYears = [];
  
    for (let i = 0; i < 4; i++) {
      const year = currentYear - i;
      recentYears.push({
        label: year.toString(),
        value: year,
        description: `A year in the 21st century, ${i === 0 ? 'current year' : ''}`,
      });
    }
  
    return recentYears;
  };


  