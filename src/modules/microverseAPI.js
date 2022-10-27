export default class FetchRequestClass {
    method;

      body;

      headers;

      url;

      constructor({
        method = 'GET',
        body, url = '',
        headers = { 'Content-type': 'application/json; charset=UTF-8' },
      } = {}) {
        this.method = method;
        this.body = body;
        this.headers = headers;
        this.url = url;
      }

      async makeRequest() {
        try {
          const options = {
            method: this.method,
            body: JSON.stringify(this.body),
            headers: this.method === 'POST' ? this.headers : undefined,
          };

          const reponse = await fetch(this.url, options);
          if (reponse.status === 201) return null;
          const data = await reponse.json();
          return data;
        } catch (error) {
          throw new Error(error);
        }
      }

      getItemByID = async (id) => {
        const item = await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
          .then((response) => response.json());
        return item;
      }

      getComments = async (id) => {
        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/comments?item_id=${id}`);
        const data = await comments.json();
        return data;
      }

      postComments = async (itemID, name, comment) => {
        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: itemID,
            username: name,
            comment,
          }),
        });
        return xxx;
      }

      getReserve = async (id) => {
        const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/reservations?item_id=${id}`);
        const data = await comments.json();
        return data;
      }

      postreservations = async (itemID, name, startDate, endDate) => {
        const xxx = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8d89N90hd9nfq0mdsf/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: itemID,
            username: name,
            date_start: startDate,
            date_end: endDate,
          }),
        });
        return xxx;
      }
}