export default function specialInfo(char) {
  const result = [];

  char.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });

  return result;
}
