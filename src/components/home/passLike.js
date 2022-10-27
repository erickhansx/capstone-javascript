const passLike = async () => {
  const charactersIds = document.querySelectorAll('.characterDiv');
  charactersIds.forEach((char) => {
    const id = char.id;
    console.log(id);
    const update = {
      item_id: char.id,
    };
    console.log(update);
    //     const options = {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(update),
    //     };
    //     fetch(idPath, options);
    //   });
    // } catch {
    //   console.log('error');
    // }
  });
};
