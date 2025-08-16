import { Module } from '@nestjs/common';
import { AppointmentsModule } from './modules/appointment/appointment.module';
import { AttributesModule } from './modules/attributes/attributes.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { CeldasModule } from './modules/celdas/celdas.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { ConceptosModule } from './modules/conceptos/conceptos.module';
import { ConfigModule } from './modules/config/config.module';
import { ConfigAutogestionModule } from './modules/config-autogestion/config-autogestion.module';
import { ConfigBdModule } from './modules/config-bd/config-bd.module';
import { ConfigCabezaModule } from './modules/config-cabeza/config-cabeza.module';
import { ConfigCapturaModule } from './modules/config-captura/config-captura.module';
import { ConfigCapturaDetModule } from './modules/config-captura-det/config-captura-det.module';
import { ConfigCitasModule } from './modules/config-citas/config-citas.module';
import { ConfigCotizaModule } from './modules/config-cotiza/config-cotiza.module';
import { ConfigDetalleModule } from './modules/config-detalle/config-detalle.module';
import { ConfigDocumentoModule } from './modules/config-documento/config-documento.module';
import { ConfigEncuestaModule } from './modules/config-encuesta/config-encuesta.module';
import { ConfigFormularioModule } from './modules/config-formulario/config-formulario.module';
import { ConfigKardexModule } from './modules/config-kardex/config-kardex.module';
import { ConfigQrModule } from './modules/config-qr/config-qr.module';
import { ConfigQrDetModule } from './modules/config-qr-det/config-qr-det.module';
import { ConfigRelModule } from './modules/config-rel/config-rel.module';
import { ConfigTableModule } from './modules/config-table/config-table.module';
import { ConfigTargetaModule } from './modules/config-targeta/config-targeta.module';
import { ConfigUbicacionModule } from './modules/config-ubicacion/config-ubicacion.module';
import { ConfigVistaModule } from './modules/config-vista/config-vista.module';
import { ConfigZonasModule } from './modules/config-zonas/config-zonas.module';
import { ConsecutivosModule } from './modules/consecutivos/consecutivos.module';
import { ContenidosModule } from './modules/contenidos/contenidos.module';
import { ContenidosCapModule } from './modules/contenidos-cap/contenidos-cap.module';
import { ContenidosDetModule } from './modules/contenidos-det/contenidos-det.module';
import { ContenidosProModule } from './modules/contenidos-pro/contenidos-pro.module';
import { ContenidosRecModule } from './modules/contenidos-rec/contenidos-rec.module';
import { ContenidosSubModule } from './modules/contenidos-sub/contenidos-sub.module';
import { ContenidosTskModule } from './modules/contenidos-tsk/contenidos-tsk.module';
import { ContenidosUsrModule } from './modules/contenidos-usr/contenidos-usr.module';
import { CuestionariosModule } from './modules/cuestionarios/cuestionarios.module';
import { CuestionariosPModule } from './modules/cuestionarios-p/cuestionarios-p.module';
import { CuestionariosRModule } from './modules/cuestionarios-r/cuestionarios-r.module';
import { DatosImportadosModule } from './modules/datos-importados/datos-importados.module';
import { DepEquiposModule } from './modules/dep-equipos/dep-equipos.module';
import { DetalleCeldasModule } from './modules/detalle-celdas/detalle-celdas.module';
import { DtnTiempoModule } from './modules/dtn-tiempo/dtn-tiempo.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { EncuestaModule } from './modules/encuesta/encuesta.module';
import { GruposUsuariosModule } from './modules/grupos-usuarios/grupos-usuarios.module';
import { KardexModule } from './modules/kardex/kardex.module';
import { KeysModule } from './modules/keys/keys.module';
import { MercadoModule } from './modules/mercado/mercado.module';
import { MercadoDetModule } from './modules/mercado-det/mercado-det.module';
import { MotivosModule } from './modules/motivos/motivos.module';
import { MotivosAnulacionModule } from './modules/motivos-anulacion/motivos-anulacion.module';
import { NichosModule } from './modules/nichos/nichos.module';
import { Oreparacion12000Module } from './modules/oreparacion1-2000/oreparacion1-2000.module';
import { Oreparacion22000Module } from './modules/oreparacion2-2000/oreparacion2-2000.module';
import { PedidosModule } from './modules/pedidos/pedidos.module';
import { PedidosDetModule } from './modules/pedidos-det/pedidos-det.module';
import { PreguntasModule } from './modules/preguntas/preguntas.module';
import { PresupuestosModule } from './modules/presupuestos/presupuestos.module';
import { RomboModule } from './modules/rombo/rombo.module';
import { SeeCostoKwhModule } from './modules/see-costo-kwh/see-costo-kwh.module';
import { SeeDatosModule } from './modules/see-datos/see-datos.module';
import { SeeFormulasModule } from './modules/see-formulas/see-formulas.module';
import { SeeMedicionesModule } from './modules/see-mediciones/see-mediciones.module';
import { SeePeriodosModule } from './modules/see-periodos/see-periodos.module';
import { SeeTemperaturaModule } from './modules/see-temperatura/see-temperatura.module';
import { SeeTemperaturaDetModule } from './modules/see-temperatura-det/see-temperatura-det.module';
import { SeeVariablesModule } from './modules/see-variables/see-variables.module';
import { SeeVariablesDetModule } from './modules/see-variables-det/see-variables-det.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { SubcategoriasModule } from './modules/subcategorias/subcategorias.module';
import { SucurralesModule } from './modules/sucurrales/sucurrales.module';
import { SusuariosModule } from './modules/susuarios/susuarios.module';
import { SysAppsModule } from './modules/sys-apps/sys-apps.module';
import { SysRolCampoModule } from './modules/sys-rol-campo/sys-rol-campo.module';
import { SysRolesModule } from './modules/sys-roles/sys-roles.module';
import { SysSubmenusModule } from './modules/sys-submenus/sys-submenus.module';
import { TablasModule } from './modules/tablas/tablas.module';
import { TablasDetModule } from './modules/tablas-det/tablas-det.module';
import { TecnicosModule } from './modules/tecnicos/tecnicos.module';
import { TemporadasModule } from './modules/temporadas/temporadas.module';
import { TraCategoriasModule } from './modules/tra-categorias/tra-categorias.module';
import { TraCilindrajeModule } from './modules/tra-cilindraje/tra-cilindraje.module';
import { TraCotizacionModule } from './modules/tra-cotizacion/tra-cotizacion.module';
import { TraCotizacionDetModule } from './modules/tra-cotizacion-det/tra-cotizacion-det.module';
import { TraCotizacionTotModule } from './modules/tra-cotizacion-tot/tra-cotizacion-tot.module';
import { TraDetallesModule } from './modules/tra-detalles/tra-detalles.module';
import { TraFisicoModule } from './modules/tra-fisico/tra-fisico.module';
import { TraGrupposModule } from './modules/tra-gruppos/tra-gruppos.module';
import { TraMarcasModule } from './modules/tra-marcas/tra-marcas.module';
import { TraMatriculasModule } from './modules/tra-matriculas/tra-matriculas.module';
import { TraMatriculasCarModule } from './modules/tra-matriculas-car/tra-matriculas-car.module';
import { TraMatriculasDetModule } from './modules/tra-matriculas-det/tra-matriculas-det.module';
import { TraModelosModule } from './modules/tra-modelos/tra-modelos.module';
import { TraMovtosModule } from './modules/tra-movtos/tra-movtos.module';
import { TraMovtosDetModule } from './modules/tra-movtos-det/tra-movtos-det.module';
import { TraMovtosTotModule } from './modules/tra-movtos-tot/tra-movtos-tot.module';
import { TraPartesModule } from './modules/tra-partes/tra-partes.module';
import { TraPeriodosModule } from './modules/tra-periodos/tra-periodos.module';
import { TraPlantillasModule } from './modules/tra-plantillas/tra-plantillas.module';
import { TraPlantillasDetModule } from './modules/tra-plantillas-det/tra-plantillas-det.module';
import { TraPosicionesModule } from './modules/tra-posiciones/tra-posiciones.module';
import { TraProcesosModule } from './modules/tra-procesos/tra-procesos.module';
import { TraProcesosTiemposModule } from './modules/tra-procesos-tiempos/tra-procesos-tiempos.module';
import { TraProcesosTiemposColoresModule } from './modules/tra-procesos-tiempos-colores/tra-procesos-tiempos-colores.module';
import { TraReferenciasModule } from './modules/tra-referencias/tra-referencias.module';
import { TraReferenciasProveedorModule } from './modules/tra-referencias-proveedor/tra-referencias-proveedor.module';
import { TraSaldosModule } from './modules/tra-saldos/tra-saldos.module';
import { TraSjustesModule } from './modules/tra-sjustes/tra-sjustes.module';
import { TraTipoMotorModule } from './modules/tra-tipo-motor/tra-tipo-motor.module';
import { TraTiposVehModule } from './modules/tra-tipos-veh/tra-tipos-veh.module';
import { TraUbicacionesModule } from './modules/tra-ubicaciones/tra-ubicaciones.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { Usuarios1Module } from './modules/usuarios1/usuarios1.module';
import { VehiculosModule } from './modules/vehiculos/vehiculos.module';
import { VencimientosModule } from './modules/vencimientos/vencimientos.module';
import { VersionesModule } from './modules/versiones/versiones.module';
import { VersionesDetModule } from './modules/versiones-det/versiones-det.module';
import { ZonasModule } from './modules/zonas/zonas.module';
import { ConceptosConModule } from './modules/conceptos-con/conceptos-con.module';
import { PreciosModule } from './modules/precios/precios.module';
import { ListApModule } from './modules/listap/listAp.module';
import { FormaPagoModule } from './modules/forma-pago/forma-pago.module';

@Module({
  imports: [
    AppointmentsModule,
    AttributesModule,
    CategoriasModule,
    CeldasModule,
    ClientesModule,
    CollectionsModule,
    ConceptosModule,
    ConfigModule,
    ConfigAutogestionModule,
    ConfigBdModule,
    ConfigCabezaModule,
    ConfigCapturaModule,
    ConfigCapturaDetModule,
    ConfigCitasModule,
    ConfigCotizaModule,
    ConfigDetalleModule,
    ConfigDocumentoModule,
    ConfigEncuestaModule,
    ConfigFormularioModule,
    ConfigKardexModule,
    ConfigQrModule,
    ConfigQrDetModule,
    ConfigRelModule,
    ConfigTableModule,
    ConfigTargetaModule,
    ConfigUbicacionModule,
    ConfigVistaModule,
    ConfigZonasModule,
    ConsecutivosModule,
    ContenidosModule,
    ContenidosCapModule,
    ContenidosDetModule,
    ContenidosProModule,
    ContenidosRecModule,
    ContenidosSubModule,
    ContenidosTskModule,
    ContenidosUsrModule,
    CuestionariosModule,
    CuestionariosPModule,
    CuestionariosRModule,
    DatosImportadosModule,
    DepEquiposModule,
    DetalleCeldasModule,
    DtnTiempoModule,
    EmpresasModule,
    EncuestaModule,
    GruposUsuariosModule,
    KardexModule,
    KeysModule,
    MercadoModule,
    MercadoDetModule,
    MotivosModule,
    MotivosAnulacionModule,
    NichosModule,
    Oreparacion12000Module,
    Oreparacion22000Module,
    PedidosModule,
    PedidosDetModule,
    PreguntasModule,
    PresupuestosModule,
    RomboModule,
    SeeCostoKwhModule,
    SeeDatosModule,
    SeeFormulasModule,
    SeeMedicionesModule,
    SeePeriodosModule,
    SeeTemperaturaModule,
    SeeTemperaturaDetModule,
    SeeVariablesModule,
    SeeVariablesDetModule,
    ServiciosModule,
    SubcategoriasModule,
    SucurralesModule,
    SusuariosModule,
    SysAppsModule,
    SysRolCampoModule,
    SysRolesModule,
    SysSubmenusModule,
    TablasModule,
    TablasDetModule,
    TecnicosModule,
    TemporadasModule,
    TraCategoriasModule,
    TraCilindrajeModule,
    TraCotizacionModule,
    TraCotizacionDetModule,
    TraCotizacionTotModule,
    TraDetallesModule,
    TraFisicoModule,
    TraGrupposModule,
    TraMarcasModule,
    TraMatriculasModule,
    TraMatriculasCarModule,
    TraMatriculasDetModule,
    TraModelosModule,
    TraMovtosModule,
    TraMovtosDetModule,
    TraMovtosTotModule,
    TraPartesModule,
    TraPeriodosModule,
    TraPlantillasModule,
    TraPlantillasDetModule,
    TraPosicionesModule,
    TraProcesosModule,
    TraProcesosTiemposModule,
    TraProcesosTiemposColoresModule,
    TraReferenciasModule,
    TraReferenciasProveedorModule,
    TraSaldosModule,
    TraSjustesModule,
    TraTipoMotorModule,
    TraTiposVehModule,
    TraUbicacionesModule,
    UsuariosModule,
    Usuarios1Module,
    VehiculosModule,
    VencimientosModule,
    VersionesModule,
    VersionesDetModule,
    ZonasModule,
    ConceptosConModule,
    PreciosModule,
    ListApModule,
    FormaPagoModule,
  ],
  exports: [
    AppointmentsModule,
    AttributesModule,
    CategoriasModule,
    CeldasModule,
    ClientesModule,
    CollectionsModule,
    ConceptosModule,
    ConfigModule,
    ConfigAutogestionModule,
    ConfigBdModule,
    ConfigCabezaModule,
    ConfigCapturaModule,
    ConfigCapturaDetModule,
    ConfigCitasModule,
    ConfigCotizaModule,
    ConfigDetalleModule,
    ConfigDocumentoModule,
    ConfigEncuestaModule,
    ConfigFormularioModule,
    ConfigKardexModule,
    ConfigQrModule,
    ConfigQrDetModule,
    ConfigRelModule,
    ConfigTableModule,
    ConfigTargetaModule,
    ConfigUbicacionModule,
    ConfigVistaModule,
    ConfigZonasModule,
    ConsecutivosModule,
    ContenidosModule,
    ContenidosCapModule,
    ContenidosDetModule,
    ContenidosProModule,
    ContenidosRecModule,
    ContenidosSubModule,
    ContenidosTskModule,
    ContenidosUsrModule,
    CuestionariosModule,
    CuestionariosPModule,
    CuestionariosRModule,
    DatosImportadosModule,
    DepEquiposModule,
    DetalleCeldasModule,
    DtnTiempoModule,
    EmpresasModule,
    EncuestaModule,
    GruposUsuariosModule,
    KardexModule,
    KeysModule,
    MercadoModule,
    MercadoDetModule,
    MotivosModule,
    MotivosAnulacionModule,
    NichosModule,
    Oreparacion12000Module,
    Oreparacion22000Module,
    PedidosModule,
    PedidosDetModule,
    PreguntasModule,
    PresupuestosModule,
    RomboModule,
    SeeCostoKwhModule,
    SeeDatosModule,
    SeeFormulasModule,
    SeeMedicionesModule,
    SeePeriodosModule,
    SeeTemperaturaModule,
    SeeTemperaturaDetModule,
    SeeVariablesModule,
    SeeVariablesDetModule,
    ServiciosModule,
    SubcategoriasModule,
    SucurralesModule,
    SusuariosModule,
    SysAppsModule,
    SysRolCampoModule,
    SysRolesModule,
    SysSubmenusModule,
    TablasModule,
    TablasDetModule,
    TecnicosModule,
    TemporadasModule,
    TraCategoriasModule,
    TraCilindrajeModule,
    TraCotizacionModule,
    TraCotizacionDetModule,
    TraCotizacionTotModule,
    TraDetallesModule,
    TraFisicoModule,
    TraGrupposModule,
    TraMarcasModule,
    TraMatriculasModule,
    TraMatriculasCarModule,
    TraMatriculasDetModule,
    TraModelosModule,
    TraMovtosModule,
    TraMovtosDetModule,
    TraMovtosTotModule,
    TraPartesModule,
    TraPeriodosModule,
    TraPlantillasModule,
    TraPlantillasDetModule,
    TraPosicionesModule,
    TraProcesosModule,
    TraProcesosTiemposModule,
    TraProcesosTiemposColoresModule,
    TraReferenciasModule,
    TraReferenciasProveedorModule,
    TraSaldosModule,
    TraSjustesModule,
    TraTipoMotorModule,
    TraTiposVehModule,
    TraUbicacionesModule,
    UsuariosModule,
    Usuarios1Module,
    VehiculosModule,
    VencimientosModule,
    VersionesModule,
    VersionesDetModule,
    ZonasModule,
    ConceptosConModule,
    PreciosModule,
    ListApModule,
    FormaPagoModule,
  ],
})
export class DomainModule {}
