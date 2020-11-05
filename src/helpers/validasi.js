export const validasiService = {
    getErr
};

function getErr(data) {
    data.errors.map((x, key) => {
        switch (x.param) {
            case 'nip': {
                return (
                    this.setState({ nip_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'nik': {
                return (
                    this.setState({ nik_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'nuptk': {
                return (
                    this.setState({ nuptk_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'nuks': {
                return (
                    this.setState({ nuptk_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'nama' :{
                return(
                    this.setState({ nama_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'tanggal_lahir': {
                return (
                    this.setState({ tanggal_lahir_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'tempat_lahir': {
                return (
                    this.setState({ tempat_lahir_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'alamat_jalan': {
                return (
                    this.setState({ alamat_jalan_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'nama_dusun': {
                return (
                    this.setState({ nama_dusun_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'desa_kelurahan': {
                return (
                    this.setState({ desa_kelurahan_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'kode_pos': {
                return (
                    this.setState({ kode_pos_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'npwp': {
                return (
                    this.setState({ npwp_err: x.msg, color: '#d93025', invalid: false })
                )
            }
            case 'email': {
                return (
                    this.setState({ email_err: x.msg, color: '#d93025', invalid: false })
                )
            }
        }
    });
}