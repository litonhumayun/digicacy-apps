export const getInstalledApps = () => {
  const data = localStorage.getItem("installedApps");
  const parsedData = JSON.parse(data);
  return parsedData || [];
};

export const saveInstalledApps = (apps) => {
  const stringifiedData = JSON.stringify(apps);
  localStorage.setItem("installedApps", stringifiedData);
};
